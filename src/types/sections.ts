export type SectionVariant = "default" | "surface";

export type SectionComponentProps<T> = {
  data: T;
  variant: SectionVariant;
  isFirst: boolean;
};
