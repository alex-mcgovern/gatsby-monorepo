import type {
  CollectionReference,
  Query,
  QuerySnapshot,
} from "firebase/firestore";
import {
  endBefore,
  limit,
  limitToLast,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import type { CommentShape } from "../../../types";
import type { PaginationVarsShape } from "./getPaginationVars";
import { getPaginationVars } from "./getPaginationVars";

export interface PaginationStateShape extends Partial<PaginationVarsShape> {
  collectionRef?: CollectionReference<CommentShape>;
  commentsPerPage: number;
  query?: Query<CommentShape>;
  querySnapshot?: QuerySnapshot<CommentShape>;
  totalNbComments?: number;
}

export interface PaginationStateAction {
  payload?: Partial<PaginationStateShape>;
  type?:
    | "UPDATE_DOCS"
    | "INITIALISE"
    | "LOAD_NEWER"
    | "LOAD_OLDER"
    | "SET_PER_PAGE";
}

export type FirestorePaginationReducer = (
  state: PaginationStateShape,
  action: PaginationStateAction
) => PaginationStateShape;

export const firestorePaginationReducer: FirestorePaginationReducer = (
  state,
  action
) => {
  switch (action.type) {
    case "INITIALISE":
      return {
        ...state,
        ...getPaginationVars({
          count: state.totalNbComments,
          perPage: state.commentsPerPage,
          newIndex: 0,
          currentIndex: state.pageNbCurrent,
          docsLength: state.querySnapshot?.docs.length,
        }),
        ...(state.collectionRef && {
          query: query<CommentShape>(
            state.collectionRef,
            orderBy("created", "desc"),
            limit(state.commentsPerPage)
          ),
        }),
      };

      break;

    case "LOAD_OLDER":
      if (!state.canLoadNext || state.pageNbCurrent === undefined) {
        break;
      }

      return {
        ...state,
        ...getPaginationVars({
          count: state.totalNbComments,
          perPage: state.commentsPerPage,
          newIndex: state.pageNbCurrent + 1,
          currentIndex: state.pageNbCurrent,
          docsLength: state.querySnapshot?.docs.length,
        }),
        ...(state.collectionRef && {
          query: query<CommentShape>(
            state.collectionRef,
            orderBy("created", "desc"),
            startAfter(state.querySnapshot?.docs.slice(-1)[0]),
            limit(state.commentsPerPage)
          ),
        }),
      };

      break;

    case "LOAD_NEWER":
      if (!state.canLoadPrevious || state.pageNbCurrent === undefined) {
        break;
      }

      if (state.pageNbCurrent <= 1) {
        return {
          ...state,
          ...getPaginationVars({
            count: state.totalNbComments,
            perPage: state.commentsPerPage,
            newIndex: 0,
            currentIndex: state.pageNbCurrent,
            docsLength: state.querySnapshot?.docs.length,
          }),
          ...(state.collectionRef && {
            query: query<CommentShape>(
              state.collectionRef,
              orderBy("created", "desc"),
              limit(state.commentsPerPage)
            ),
          }),
        };
      }

      return {
        ...state,
        ...getPaginationVars({
          count: state.totalNbComments,
          perPage: state.commentsPerPage,
          newIndex: state.pageNbCurrent - 1,
          currentIndex: state.pageNbCurrent,
          docsLength: state.querySnapshot?.docs.length,
        }),
        ...(state.collectionRef && {
          query: query<CommentShape>(
            state.collectionRef,
            orderBy("created", "desc"),
            endBefore(state.querySnapshot?.docs[0]),
            limitToLast(state.commentsPerPage)
          ),
        }),
      };

      break;

    case "SET_PER_PAGE": {
      if (action.payload?.commentsPerPage) {
        return {
          ...state,
          ...getPaginationVars({
            count: state.totalNbComments,
            perPage: action.payload?.commentsPerPage,
            newIndex: 0,
            currentIndex: state.pageNbCurrent,
            docsLength: state.querySnapshot?.docs.length,
          }),
          commentsPerPage: action.payload?.commentsPerPage,
          ...(state.collectionRef && {
            query: query<CommentShape>(
              state.collectionRef,
              orderBy("created", "desc"),
              limit(action.payload?.commentsPerPage)
            ),
          }),
        };
      }

      break;
    }

    case "UPDATE_DOCS": {
      if (action.payload?.querySnapshot) {
        return {
          ...state,
          ...getPaginationVars({
            count: action.payload.totalNbComments,
            perPage: state.commentsPerPage,
            newIndex: state.pageNbCurrent,
            currentIndex: state.pageNbPrevious,
            docsLength: action.payload.querySnapshot.docs.length,
          }),
          querySnapshot: action.payload.querySnapshot,
          totalNbComments: action.payload.totalNbComments,
        };
      }

      break;
    }

    default: {
      return {
        ...state,
        ...getPaginationVars({
          count: state.totalNbComments,
          perPage: state.commentsPerPage,
          newIndex: state.pageNbCurrent,
          currentIndex: state.pageNbPrevious,
          docsLength: state.querySnapshot?.docs.length,
        }),
      };
    }
  }

  return {
    ...state,
    ...getPaginationVars({
      count: state.totalNbComments,
      perPage: state.commentsPerPage,
      newIndex: state.pageNbCurrent,
      currentIndex: state.pageNbPrevious,
      docsLength: state.querySnapshot?.docs.length,
    }),
  };
};
