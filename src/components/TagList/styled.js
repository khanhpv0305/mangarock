import styled from 'styled-components'

import { Link } from 'react-router-dom'

const TagList = styled.div``

TagList.Item = styled(Link)`
  display: inline-block;
  padding: 5px 15px;
  border-radius: 3px;
  color: rgba(0,0,0,.54);
  background: #f5f5f5;
  margin-right: 15px;

  &:hover {
    background: rgba(0,0,0,.12);
    text-decoration: none;
    color: rgba(0,0,0,.54);
  }
`

export default TagList