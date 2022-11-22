import React from "react";
import { Box, Input } from "@alexmcgovern/boondoggle.design";
import { graphql } from "gatsby";
import { Controller, useForm } from "react-hook-form";

interface IContactPageProps {
  data: {
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

function ContactPage({ data }: IContactPageProps) {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    return console.log("submit", data);
  };

  const { site } = data;
  const siteTitle = site.siteMetadata.title || "Title";

  const { formFieldGroups } = [];

  return (
    <Box marginY="spacing4">
      <Box
        display="grid"
        gridTemplateColumns={{
          mobile: "1x",
          tablet: "2x",
        }}
        gap="spacing3"
      >
        <Box as="header">
          <Box as="h1" marginTop="none">
            Contact me
          </Box>
          <Box as="p">
            It's probably easier for you to reach me on{" "}
            <a href="https://uk.linkedin.com/in/lxdesign">LinkedIn</a>. just
            built this contact page as an exercise in pre-rendering a Hubspot
            form at build time instead of embedding their widget — but if you
            wanna ask me something, go for it.
          </Box>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          {formFieldGroups &&
            formFieldGroups.length > 0 &&
            formFieldGroups.map((group) => {
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
                      render={({ field }) => {
                        return (
                          <Input
                            {...field}
                            id={formField.name}
                            name={formField.label}
                            label={formField.label}
                            isLabelVisible={!formField.labelHidden}
                            marginBottom="spacing3"
                          />
                        );
                      }}
                    />
                  );
                }
              }
            })}
          <input type="submit" />
        </form>
      </Box>
    </Box>
  );
}

export default ContactPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    # hubspotForm(id: { eq: "edeed24c-c7b8-497c-a269-b42b70550c7c" }) {
    #   id
    #   formFieldGroups {
    #     fields {
    #       defaultValue
    #       description
    #       displayOrder
    #       enabled
    #       fieldType
    #       groupName
    #       hidden
    #       isSmartField
    #       label
    #       labelHidden
    #       name
    #       objectTypeId
    #       placeholder
    #       propertyObjectType
    #       required
    #       unselectedLabel
    #       type
    #       validation {
    #         useDefaultBlockList
    #         name
    #         message
    #         data
    #       }
    #     }
    #   }
    # }
  }
`;
