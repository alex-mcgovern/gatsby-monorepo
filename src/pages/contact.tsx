import React from "react";
import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import { Controller, useForm } from "react-hook-form";
import { Box } from "../components/atoms/box/box";
import { Input } from "../components/atoms/input/input";
import { Typography } from "../components/atoms/typography/typography";
import Page from "../components/organisms/page/page";
import {
  BOX_CUSTOMISATION_MAX_WIDTH_FULL,
  BOX_CUSTOMISATION_SECTION_SPACING,
} from "../utils/shared_props/box_props";

interface IContactPageProps {
  data: {
    allInstagramContent?: {
      nodes?: {
        localImage: ImageDataLike;
        permalink: string;
        caption: string;
      }[];
    };

    bio?: {
      nodes: {
        excerptAst?: string;
      }[];
    };
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const ContactPage = ({ data }: IContactPageProps) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("submit", data);

  const { site, hubspotForm } = data;
  const siteTitle = site.siteMetadata.title || "Title";

  const { formFieldGroups } = hubspotForm;

  return (
    <Page title={siteTitle}>
      <Box
        customisation={{
          ...BOX_CUSTOMISATION_SECTION_SPACING,
        }}
      >
        <Box
          customisation={{
            display: "grid",
            gridTemplateColumns: {
              mobile: "1x",
              tablet: "2x",
            },
            gap: "spacing3",
          }}
        >
          <Box as="header">
            <Typography
              as="h1"
              customisation={{
                marginTop: "none",
              }}
            >
              Contact me
            </Typography>
            <Typography as="p">
              It's probably easier for you to reach me on{" "}
              <a href="https://uk.linkedin.com/in/lxdesign">LinkedIn</a>. just
              built this contact page as an exercise in pre-rendering a Hubspot
              form at build time instead of embedding their widget — but if you
              wanna ask me something, go for it.
            </Typography>
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            {formFieldGroups.map((group) => {
              const [formField] = group.fields;
              if (formField.enabled) {
                if (
                  formField.fieldType === "text" ||
                  formField.fieldType === "textarea"
                ) {
                  return (
                    <Controller
                      key={formField.name}
                      name={formField.name}
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          id={formField.name}
                          label={formField.label}
                          isLabelVisible={!formField.labelHidden}
                          customisation={{ marginBottom: "spacing3" }}
                        />
                      )}
                    />
                  );
                }
              }
            })}
            <input type="submit" />
          </form>
        </Box>
      </Box>
    </Page>
  );
};

export default ContactPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    hubspotForm(id: { eq: "edeed24c-c7b8-497c-a269-b42b70550c7c" }) {
      id
      formFieldGroups {
        fields {
          defaultValue
          description
          displayOrder
          enabled
          fieldType
          groupName
          hidden
          isSmartField
          label
          labelHidden
          name
          objectTypeId
          placeholder
          propertyObjectType
          required
          unselectedLabel
          type
          validation {
            useDefaultBlockList
            name
            message
            data
          }
        }
      }
    }
  }
`;
