"use client";

import * as React from "react";

type MotionOnlyProps = {
  animate?: unknown;
  exit?: unknown;
  initial?: unknown;
  layout?: unknown;
  layoutId?: unknown;
  transition?: unknown;
  variants?: unknown;
  viewport?: unknown;
  whileHover?: unknown;
  whileInView?: unknown;
  whileTap?: unknown;
};

type StaticElementProps<T extends HTMLElement> =
  React.HTMLAttributes<T> & MotionOnlyProps;

function withoutMotionProps<T extends HTMLElement>({
  animate,
  exit,
  initial,
  layout,
  layoutId,
  transition,
  variants,
  viewport,
  whileHover,
  whileInView,
  whileTap,
  ...props
}: StaticElementProps<T>): React.HTMLAttributes<T> {
  void animate;
  void exit;
  void initial;
  void layout;
  void layoutId;
  void transition;
  void variants;
  void viewport;
  void whileHover;
  void whileInView;
  void whileTap;

  return props;
}

export const MotionDiv = React.forwardRef<
  HTMLDivElement,
  StaticElementProps<HTMLDivElement>
>(function MotionDiv(props, ref) {
  return <div ref={ref} {...withoutMotionProps(props)} />;
});

export const MotionH1 = React.forwardRef<
  HTMLHeadingElement,
  StaticElementProps<HTMLHeadingElement>
>(function MotionH1(props, ref) {
  return <h1 ref={ref} {...withoutMotionProps(props)} />;
});

export const MotionP = React.forwardRef<
  HTMLParagraphElement,
  StaticElementProps<HTMLParagraphElement>
>(function MotionP(props, ref) {
  return <p ref={ref} {...withoutMotionProps(props)} />;
});
