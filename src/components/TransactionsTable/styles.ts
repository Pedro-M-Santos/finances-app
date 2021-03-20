import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1280px;
    margin: 4rem auto auto;

    .header{
        display: flex;
        justify-content: space-between;
        padding: 1px 2rem;

        p{
            font-weight:600;
            margin-bottom:0.5rem;
            width: calc(100% / 4);
            text-align: center;
        }


    }
    .table{
        display:flex;
        flex-direction:column;

        div{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            flex-wrap:wrap;
            background: var(--shape);
            height: 3rem;

            border-radius: 5px;
            margin: 5px 0;
            padding: 0 1rem;

            p{
                margin: auto 0;
                color: var(--text-body);
                width: calc(100% / 4);
                text-align: center;
                
                &:first-child{
                    font-weight:600;
                    color: var(--text-title);
                }

                &.deposit{
                    color: var(--green);
                }

                &.withdraw{
                color: var(--red);
                }
            }
        }
    }

`