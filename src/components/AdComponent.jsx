import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    adsbygoogle: {
        paddingBottom: theme.spacing.navHeight + theme.spacing.unit
    }
});

class AdComponent extends React.Component {
    componentDidMount() {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render() {
        const { classes } = this.props;

        return (
            <ins
                className={classes.adsbygoogle}
                style={{ display: "block" }}
                data-ad-client="ca-pub-8245757393003756"
                data-ad-slot="6161702689"
                data-ad-format="link"
            />
        );
    }
}

export default withStyles(styles)(AdComponent);
