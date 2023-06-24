import { collection, config, fields, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    homepage: singleton({
      label: "Homepage",
      path: "content/homepage/",
      schema: {
        seoTitle: fields.text({ label: "SEO Title" }),
        availableForWork: fields.checkbox({ label: "Available for work" }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
        }),
        avatar: fields.image({
          label: "Avatar",
          directory: "public/images",
          publicPath: "/images/",
        }),
      },
    }),
  },
  collections: {
    work: collection({
      label: "Work",
      path: "content/work/*",
      slugField: "company",
      schema: {
        company: fields.slug({ name: { label: "company" } }),
        job: fields.text({ label: "Job" }),
        description: fields.text({ label: "Description" }),
        periodFrom: fields.date({ label: "Period From" }),
        periodTo: fields.date({ label: "Period To" }),
        technology: fields.array(fields.text({ label: "Technology" }), {
          label: "Technology",
          itemLabel: (props) => props.value,
        }),
      },
    }),
  },
});
