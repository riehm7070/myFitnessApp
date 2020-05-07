import styled from "@emotion/styled";

export const Nav = styled("div")`
  & > * {
    margin-left: 1em;
    color: white;
  }
  background: black;
  padding: 1em;
  height: 2em;
  display: flex;
  width:100%;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  min-width:700px;
`
export const PageBody = styled("div")`
  width: 100%;
  height: 100%;
  padding: 2em;
  
`

export const TabHead = styled("div")`
  border-bottom: 1px solid black;
  display: flex;
  background: black;
  position: sticky;
  top: 0;
`
export const TabContainer = styled("div")`
  width: 35em;
  height: 30em;
  margin: 0 auto;
  webkit-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  -moz-box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  box-shadow: -1px 0px 5px 0px rgba(184, 184, 184, 1);
  overflow: scroll;
  ::-webkit-scrollbar{
    display:none;
  }
`
export const TabBody = styled(PageBody)`
  height: 100%;
  
`
export const Tab = styled("div")`
  padding: 1em;
  background: ${({ selected }) => (selected ? "grey" : "black")};
  * {
    color: white;
  }
`