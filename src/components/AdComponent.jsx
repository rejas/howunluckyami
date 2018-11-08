import React from "react";

export default class AdComponent extends React.Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        return (
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-8245757393003756"
                data-ad-slot="6161702689"
                data-ad-format="link"
            />
        );
    }
}
