import styled from "styled-components";
import AppText from "../apptext/AppText";

const ToolCont = styled.div`
display: flex;

`
const ToolBox = styled.img`

`

export default function ToolTip({
text="Report",
}){

    return <ToolCont>
        <ToolBox src="tooltip.png" />
        <AppText margintop="45px" marginleft="-110px" txt={text} wt="600" sz="20px"></AppText>
    </ToolCont>
}