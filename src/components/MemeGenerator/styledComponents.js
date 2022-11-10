import styled from 'styled-components'

export const MemeGeneratorBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  font-family: 'Roboto';
  margin: 0;
`

export const MemeHeader = styled.h1`
  color: #35469c;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const GeneratedMemeContainer = styled.div`
  margin: 0;
  width: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media (min-width: 768px) {
    width: 50%;
    order: 1;
  }
`

export const GeneratedMemeText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize};
  font-weight: 550;
  text-align: center;
  line-height: 1.5rem;
  padding: 1rem;
`
