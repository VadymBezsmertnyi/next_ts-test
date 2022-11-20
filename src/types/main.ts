export interface ISvgProps {
  width?: string | number;
  height?: string | number;
}

export type TFeedback = {
  name: string;
  phone: string;
  email: string;
};

export type TErrorsFeedback = {
  name?: string;
  phone?: string;
  email?: string;
};

export type TService = {
  id: number;
  Icon: ({ width, height }: ISvgProps) => JSX.Element;
  title: string;
  pcs: number;
};

export type TSlide = {
  id: number;
  mainTitle: string;
  img: string;
  discount: number;
  otherTitle: string;
  services: Array<TService>;
};
