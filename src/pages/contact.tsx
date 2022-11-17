import React from "react";
import { graphql } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import { Controller, useForm } from "react-hook-form";
import { BoxNew } from "../components/atoms/box_new/box_new";
import { Input } from "../components/atoms/input/input";

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
    <BoxNew marginY="spacing4">
      <BoxNew
        display="grid"
        gridTemplateColumns={{
          mobile: "1x",
          tablet: "2x",
        }}
        gap="spacing3"
      >
        <BoxNew as="header">
          <BoxNew
            as="h1"
            customisation={{
              marginTop: "none",
            }}
          >
            Contact me
          </BoxNew>
          <BoxNew as="p">
            It's probably easier for you to reach me on{" "}
            <a href="https://uk.linkedin.com/in/lxdesign">LinkedIn</a>. just
            built this contact page as an exercise in pre-rendering a Hubspot
            form at build time instead of embedding their widget — but if you
            wanna ask me something, go for it.
          </BoxNew>
        </BoxNew>

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
                        name={formField.label}
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
      </BoxNew>
    </BoxNew>
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
