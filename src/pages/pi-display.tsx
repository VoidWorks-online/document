import React from "react";

export default function PiDisplay() {
    return (
        <div style={{ height: "100vh" }}>
            <iframe
                src="/Tool/pi-display.html"
                title="Pi Display"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                }}
            />
        </div>
    );
}
