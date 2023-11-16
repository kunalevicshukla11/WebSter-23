import styled from "styled-components";

const WrapperCompPage = styled.section`
  margin-top: 1rem;
  margin-right: 4rem;
  margin-left: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--green-light);
  }
  .delete-btn {
    color: var(--red-dark);
    background: var(--red-light);
    margin: 10px;
  }
  .btn-hero {
    margin-right: 30px;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
  }
`;
export default WrapperCompPage;
