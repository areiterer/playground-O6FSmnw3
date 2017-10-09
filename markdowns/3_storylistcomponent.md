# The _“StoryList”_ component

Now that we created a component which represents one item in the list, we still need to build the list component to be able to display a bunch of stories.

The StoryList component will receive an array of stories to render a `<Story>` once per item in the list. In this case, the rank will be calculated by the index of the item within the array since this will not be part of the story item we get from the API later.

```javascript
import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Spinner from "react-spinkit";

import Story from "../components/Story";

const Wrapper = styled.div`margin: 20px;`;
const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;

export default class StoryList extends Component {
  render() {
    const items = this.props.items;

    if (items.length > 0) {
      return this.renderList(items);
    } else
      return (
        <LoadingWrapper>
          <Spinner name="ball-grid-pulse" fadeIn="none" />
        </LoadingWrapper>
      );
  }

  renderList(items) {
    return (
      <Wrapper>
        {items.map((item, i) => <Story key={item.id} item={item} />)}
      </Wrapper>
    );
  }
}

StoryList.propTypes = {
  items: PropTypes.array.isRequired
};
```