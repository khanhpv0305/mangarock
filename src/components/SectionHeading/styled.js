import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SectionHeading = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

SectionHeading.H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0;
`

SectionHeading.TextRight = styled(Link)`
  color: #29b6f6;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1;

  &:hover {
    color: #29b6f6;
  }
`

export default SectionHeading