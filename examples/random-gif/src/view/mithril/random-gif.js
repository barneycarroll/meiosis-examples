import m from "mithril";
import { actions } from "../../random-gif";

export const view = (model, id) => {
  const onEditTag = evt => {
    evt.preventDefault();
    actions.editTag(id, evt.target.value);
  };

  const onNewGif = evt => {
    evt.preventDefault();
    actions.newGif(id, model.tag);
  };

  const src = model.isLoading ? "/examples/random-gif/images/loading.gif" : (
    model.isError ? "/examples/random-gif/images/error.png" : model.image_url
  );

  return m("div", [
    m("span", "Tag:"),
    m("input[type=text]", { value: model.tag, onkeyup: onEditTag }),
    m("button.btn.btn-xs.btn-default", { onclick: onNewGif }, "Random Gif"),
    m("div", [ m("img", { width: 200, height: 200, src }) ])
  ]);
};
