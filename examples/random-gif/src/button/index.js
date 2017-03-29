import m from "mithril";
import classnames from "classnames";
import { lensProp, not, over } from "ramda";

const toggle = update => () => update(over(lensProp("active"), not));

export const button = {
  model: () => ({
    active: false
  }),
  create: update => model => {
    const classes = classnames({ "bg-green": model.active, "bg-gray": !model.active });
    const label = model.active ? "Active" : "Inactive";
    return m("button.white.ba.b--white.br2.pv1.ph2.link.w4", { class: classes, onclick: toggle(update) }, label);
  }
};
