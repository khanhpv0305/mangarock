import styled from 'styled-components'

import { Link } from 'react-router-dom'

const TwShareBtn = styled(Link)`
  display: inline-block;
  background: #00ACED;
  line-height: 36px;
  padding: 0 16px;
  color: white;
  display: flex;
  align-items: center;

  > svg {
    margin-right: 12px;
  }

  &:hover {
    text-decoration: none;
    color: white;
  }
`
export default TwShareBtn