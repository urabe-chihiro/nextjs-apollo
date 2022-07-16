import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
};


export type MutationCreateTodoArgs = {
  input: NewTodo;
};

export type NewTodo = {
  text: Scalars['String'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Todo>;
};

export type Todo = {
  __typename?: 'Todo';
  done: Scalars['Boolean'];
  id: Scalars['ID'];
  text: Scalars['String'];
  user: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CreateTodoMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', text: string, done: boolean, user: { __typename?: 'User', id: string } } };

export type FindTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type FindTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', text: string, done: boolean, user: { __typename?: 'User', name: string } }> };


export const CreateTodoDocument = gql`
    mutation createTodo {
  createTodo(input: {text: "todo", userId: "4"}) {
    user {
      id
    }
    text
    done
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const FindTodosDocument = gql`
    query findTodos {
  todos {
    text
    done
    user {
      name
    }
  }
}
    `;

/**
 * __useFindTodosQuery__
 *
 * To run a query within a React component, call `useFindTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindTodosQuery(baseOptions?: Apollo.QueryHookOptions<FindTodosQuery, FindTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindTodosQuery, FindTodosQueryVariables>(FindTodosDocument, options);
      }
export function useFindTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindTodosQuery, FindTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindTodosQuery, FindTodosQueryVariables>(FindTodosDocument, options);
        }
export type FindTodosQueryHookResult = ReturnType<typeof useFindTodosQuery>;
export type FindTodosLazyQueryHookResult = ReturnType<typeof useFindTodosLazyQuery>;
export type FindTodosQueryResult = Apollo.QueryResult<FindTodosQuery, FindTodosQueryVariables>;