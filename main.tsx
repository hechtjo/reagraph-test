import React, {ReactElement} from "react";
import {GraphCanvas} from "reagraph";
import {createRoot} from "react-dom/client";

export function RelationshipGraph(): ReactElement<unknown, string> {
    return (
            <GraphCanvas
                nodes={[
                    {
                        id: "n-1",
                        label: "1",
                    },
                    {
                        id: "n-2",
                        label: "2",
                    },
                ]}
                edges={[
                    {
                        id: "1->2",
                        source: "n-1",
                        target: "n-2",
                        label: "Test"
                    },
                ]}
            />
    );
}

const root = createRoot(document.getElementById("root"))
root.render(<RelationshipGraph />)
