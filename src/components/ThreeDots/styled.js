import styled from 'styled-components'

const ThreeDots = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;

  &:hover {
    background: hsla(0,0%,62%,.2);;
  }
`
ThreeDots.Dot = styled.div`
  height: 3px;
  width: 3px;
  background: #000;

  &:not(:last-child) {
    margin-right: 3px;
  }
`

export default ThreeDots