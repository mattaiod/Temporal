"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otelSDK = void 0;
const sdk_trace_base_1 = require("@opentelemetry/sdk-trace-base");
const sdk_node_1 = require("@opentelemetry/sdk-node");
const process = require("process");
const instrumentation_http_1 = require("@opentelemetry/instrumentation-http");
const instrumentation_express_1 = require("@opentelemetry/instrumentation-express");
const resources_1 = require("@opentelemetry/resources");
const semantic_conventions_1 = require("@opentelemetry/semantic-conventions");
const traceExporter = new sdk_trace_base_1.ConsoleSpanExporter();
exports.otelSDK = new sdk_node_1.NodeSDK({
    resource: new resources_1.Resource({
        [semantic_conventions_1.SemanticResourceAttributes.SERVICE_NAME]: `gateway-service`,
    }),
    spanProcessor: new sdk_trace_base_1.SimpleSpanProcessor(traceExporter),
    instrumentations: [new instrumentation_http_1.HttpInstrumentation(), new instrumentation_express_1.ExpressInstrumentation()],
});
process.on("SIGTERM", () => {
    exports.otelSDK
        .shutdown()
        .then(() => console.log("SDK shut down successfully"), (err) => console.log("Error shutting down SDK", err))
        .finally(() => process.exit(0));
});
//# sourceMappingURL=tracing.js.map