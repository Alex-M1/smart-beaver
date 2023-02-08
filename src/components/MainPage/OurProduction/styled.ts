import styled from 'styled-components';

export const StOurProduction = styled.div`
  padding: 146px;

  .image {
    &-1{ grid-area: a;}
    &-2{
      grid-area: b;
      justify-self: end;
    }
    &-3{ grid-area: c;}
    &-4{ 
      grid-area: d;
      justify-self: end;
    }
  }

  .production {
    &__images {
      display: grid;
      padding-top: 77px;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas: 
        "a a b"
        "c d d";
    }
  }

  img {
    max-width: 100%;
    height: 100%;
  }

  @media(max-width: 1025px) {
    .production {
      &__images {
        padding-top: 30px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-areas: 
          "a a a a a a b b"
          "c c d d d d d d";
      }
    }
    .image {
      &-1{
        padding-right: 20px;
        img {
          width: 100%;
        }
      }
      &-2{
        img {
          width: 100%;
        }
      }
      &-4{
        padding-left: 20px;
      }
    }
  }

  @media (max-width: 426px) {
    .production {
      &__images {
        padding-top: 30px;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
          "a a"
          "b c"
          "d d";
      }
    }
    .image {
      &-1, &-4 {
        padding: 0;
      }
      &-2 {
        padding-right: 20px;
      }
      &-3 {
        padding-left: 25px;
      }
    }
  }
`;
