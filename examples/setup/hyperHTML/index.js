import flyd from "flyd";
import hyperHTML from "hyperhtml/esm";

import { createTemperature } from "./temperature";

// Only for using Meiosis Tracer in development.
import { trace } from "meiosis";
import meiosisTracer from "meiosis-tracer";

const update = flyd.stream();
const temperature = createTemperature(update);
const initialModel = temperature.model();
const applyUpdate = (model, modelUpdate) => modelUpdate(model);
const models = flyd.scan(applyUpdate, initialModel, update);

const element = document.getElementById("app");
const render = hyperHTML.bind(element);
models.map(model => render`${temperature.view(model)}`);

// Only for using Meiosis Tracer in development.
trace({ update, dataStreams: [ models ]});
meiosisTracer({ selector: "#tracer" });
