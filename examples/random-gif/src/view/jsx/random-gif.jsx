import m from "mithril";
import prevDef from "prevent-default";
import { imgsrc, randomGif } from "../../random-gif";

const onEditTag = id => evt => randomGif.intents.editTag({ id, tag: evt.target.value });
const onNewGif = (id, tag) => () => randomGif.intents.newGif({ id, tag });

export const randomGifView = model => {
  return (<div>
    <span>Tag:</span>
    <input type="text" value={ model.tag } oninput={ prevDef(onEditTag(model.id)) }/>
    <button className="btn btn-xs btn-default" onclick={ prevDef(onNewGif(model.id, model.tag)) }>Random Gif</button>
    <div><img width="200" height="200" src={ imgsrc(model) }/></div>
  </div>);
};
