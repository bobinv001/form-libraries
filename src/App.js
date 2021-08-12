import {
  FullScreen,
  Progress,
  Box,
  FlexBox,
  Deck,
  Slide,
  Text,
  Heading,
  CodePane,
  UnorderedList,
  ListItem,
  Table,
  TableCell,
  TableRow,
  TableHeader,
  TableBody,
  Image,
} from "spectacle";
import "./App.css";
const theme = {
  colors: {
    // primary: "#fff",
    // secondary: "#f5f5f5",
    // tertiary: "#705697AA",
    primary: "#ec5990",
    secondary: "#081328",
  },
  // fonts: "Quicksand",
  fonts: {
    header: '"Montserrat", Helvetica, Arial, sans-serif',
    text: '"Montserrat", Helvetica, Arial, sans-serif',
  },
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

function App() {
  return (
    <Deck theme={theme} template={template}>
      <Slide backgroundColor="secondary">
        <FlexBox height="100%" flexDirection="column">
          <Heading color="primary" fontSize="h3">
            REACT HOOK FORM vs FORMIK vs CUSTOM
          </Heading>
          <Text color="white" paddingTop="10" fontSize="2.2em">
            Comparison of form management libraries
          </Text>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="secondary" textColor="white">
        <Text>
          Handling forms in React requires you to write lots of boilerplate code
          for:
        </Text>
        <UnorderedList color="white" fontSize="1.8em">
          <ListItem>
            Managing and validating user input values with state
          </ListItem>
          <ListItem>Keeping track of invalid error messages </ListItem>
          <ListItem>Handling form submission</ListItem>
        </UnorderedList>
      </Slide>
      <Slide backgroundColor="secondary" textColor="white">
        <Text>Lets compare some of the most popular form libraries</Text>
        <FlexBox>
          <Image
            width="70%"
            src="https://user-images.githubusercontent.com/10513364/94325992-a5f2ca80-ffe4-11ea-9238-44b0633dfe93.png"
          />
        </FlexBox>
      </Slide>
      <Slide backgroundColor="secondary" textColor="white">
        <Text>Lets compare some of the most popular form libraries</Text>
        <FlexBox>
          <Image
            width="70%"
            src="https://user-images.githubusercontent.com/17121750/128648289-5b702c32-1377-4065-ba13-06faab4fddf1.png"
          />
        </FlexBox>
      </Slide>
      <Slide backgroundColor="secondary" textColor="white">
        {/* <Heading>
          Lets compare some of the popular form management libraries
        </Heading> */}
        <Table className="table-new">
          <TableHeader>
            <TableCell></TableCell>
            <TableCell>Formik</TableCell>
            <TableCell>React hook form</TableCell>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell fontSize="0.8em" color="white" fontWeight="bold">
                Size
              </TableCell>
              <TableCell fontSize="0.8em" color="white">
                12.6kB
              </TableCell>
              <TableCell fontSize="0.8em" color="white">
                5.2kB
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell fontSize="0.8em" color="white" fontWeight="bold">
                Weekly downloads
              </TableCell>
              <TableCell fontSize="0.8em" color="white">
                1,486,953
              </TableCell>
              <TableCell fontSize="0.8em" color="white">
                893,036
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell fontSize="0.8em" color="white" fontWeight="bold">
                Stars
              </TableCell>
              <TableCell fontSize="0.8em" color="white">
                27.4K
              </TableCell>
              <TableCell fontSize="0.8em" color="white">
                22.4K
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell fontSize="0.8em" color="white" fontWeight="bold">
                Open Issues
              </TableCell>
              <TableCell fontSize="0.8em" color="white">
                510
              </TableCell>
              <TableCell fontSize="0.8em" color="white">
                3
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell fontSize="0.8em" color="white" fontWeight="bold">
                Dependencies
              </TableCell>
              <TableCell fontSize="0.8em" color="white">
                9
              </TableCell>
              <TableCell fontSize="0.8em" color="white">
                0
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <FlexBox marginTop="20px">
          <Image
            width="50%"
            src="https://blog.logrocket.com/wp-content/uploads/2019/10/Screen-Shot-2021-07-19-at-1.48.31-PM.png"
          ></Image>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="secondary" textColor="white">
        <Text>Let's compare perforamance</Text>
      </Slide>
      <Slide backgroundColor="secondary" textColor="white">
        <Text>
          With its smaller size, zero dependencies, better performance, React
          Hook Form is the clear winner here.
        </Text>
      </Slide>

      <Slide backgroundColor="secondary">
        <Text>How do you use React hook form</Text>
        <CodePane
          language="javascript"
          theme="tomorrow"
          highlightRanges={[2, 14, 19, 24, 28, 12, [4, 7]]}
        >{`
        function App() {
          const { register, handleSubmit } = useForm();
        
          function onSubmit(data) {
            console.log(data); 
            // { username: 'test', email: 'test', password: 'test' }
          }
        
          return (
            <div>
              <h4>Signup</h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register('username')}
                  type="text"
                  placeholder="Username"
                />
                <input
                  {...register('email')}
                  placeholder="Email"
                  type="email"
                />
                <input
                  {...register('password')}
                  placeholder="Password"
                  type="password"
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          );
        }
        `}</CodePane>
      </Slide>
      <Slide backgroundColor="secondary">
        <FlexBox flexDirection="column">
          <Image
            width="75%"
            src="https://user-images.githubusercontent.com/17121750/128779477-eea7bcd8-7af6-42a9-8d45-dc595037eb88.png"
          />
          <Text color="white" fontSize="1.8em">
            This method allows you to register an input or select element and
            apply validation rules to React Hook Form.
          </Text>
          <Image
            width="50%"
            src="https://user-images.githubusercontent.com/17121750/128778962-5d4b8e9e-761b-4319-b651-d17400035904.png"
          />
        </FlexBox>

        <CodePane
          language="javascript"
          theme="tomorrow"
          highlightRanges={[2, 14, 19, 24, 28, 12, [4, 7]]}
        >{`
        <input
          {...register("test", {
            required: 'error message' // JS only: <p>error message</p> TS only support string
          })}
        />
        <input
  {...register("test", {
    validate: value => value === '1' || 'error message'  // JS only: <p>error message</p> TS only support string
  })}
/>
        `}</CodePane>
      </Slide>

      {/* <Slide>
        <Heading>TypeScript: Zero to Hero</Heading>
        <Table className="table-new">
          <TableRow>
            <TableCell>
              <div className="img"></div>
            </TableCell>
            <TableCell>
              <Text fontSize="h5">Priyanka Shete</Text>
              <Text fontSize="h6">Senior software developer</Text>
              <Link href="http://piyukore06.netlify.app/">priyanka.codes</Link>
            </TableCell>
          </TableRow>
        </Table>
      </Slide> */}
      {/* <Slide>
        <Heading>Goal: Explore typescript features</Heading>
        <OrderedList>
          <ListItem>
            <Link href="https://www.typescriptlang.org/play">
              Typescript playground
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://astexplorer.net/">AST explorer</Link>
          </ListItem>
        </OrderedList>
      </Slide>

      <Slide>
        <Heading>Union types 🤔</Heading>
        <CodePane language="javascript" theme="duotoneLight">
          {`
      function padLeft(value: string, padding: any) {
        if (typeof padding === "number") {
          return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
          return padding + value;
        }
        throw new Error('Only number or string type are supported');
      }
      `}
        </CodePane>
      </Slide>

      <Slide>
        <Heading>Union types 💡</Heading>
        <CodePane language="javascript" theme="duotoneLight">
          {`
      function padLeft(value: string, padding: number | string) {

        if (typeof padding === "number") {
          return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
          return padding + value;
        }
        throw new Error('Only number or string type are supported');
      }
      `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Nullable types 🤔</Heading>
        <CodePane language="javascript" theme="duotoneLight">
          {`
  interface Member {
      name: string,
      age?: number
  }

  function setMember(member: Member) {
    const stringifyAge = member.age.toString(); // Cannot read property 'toString' of undefined
  }
      `}
        </CodePane>
      </Slide>

      <Slide>
        <Heading>Discriminated Unions 🤔</Heading>
        <CodePane language="javascript" theme="duotoneLight">
          {`
type NetworkState = {
  state: 'loading' | 'success' | 'failed';
  code?: number; // available only when request has failed
  response?: {
    title: string;
    duration: number;
    summary: string;
  }; // available only when request successful
}

function logger(state: NetworkState) {
  switch (state.state) {
    case "loading":
      return "Downloading...";
    case "failed":
      // The type must be NetworkFailedState here,
      // so accessing the 'code' field is safe
      return "Error  downloading " + state.code;
    case "success":
      return "Downloaded " + state.response.title;
  }
}
      `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Discriminated Unions 💡</Heading>
        <CodePane language="javascript" theme="duotoneLight">
          {`
type NetworkLoadingState = {
  state: "loading";
};
type NetworkFailedState = {
  state: "failed";
  code: number;
};
type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};
// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function logger(state: NetworkState) {
  switch (state.state) {
    case "loading":
      return "Downloading...";
    case "failed":
      // The type must be NetworkFailedState here,
      // so accessing the 'code' field is safe
      return "Error  downloading " + state.code;
    case "success":
      return "Downloaded " + state.response.title;
  }
}
      `}
        </CodePane>
      </Slide>

      <Slide>
        <Heading>Generic Types 🤔</Heading>
        <CodePane language="javascript" theme="duotoneLight">
          {`
class AnyList {
  private values: any[] = [];

  constructor (values: any[] = []) {
      this.values = values;
  }
  public add(value: any): void {
      this.values.push(value);
  }
}

class User {
    name: string;
    constructor(name: string) { this.name = name; }
}

const intList = new AnyList();
intList.add(4);

const stringList = new AnyList();
stringList.add('hello');

const userList = new AnyList();
userList.add(new User('Jamie'));
      `}
        </CodePane>
      </Slide>

      <Slide>
        <Heading>Generics Types 💡</Heading>

        <CodePane language="javascript" theme="duotoneLight">
          {`
class TypedList<T> {
  private values: T[] = [];

  constructor (values: T[] = []) {
    this.values = values;
  }

  public add(value: T): void {
      this.values.push(value);
  }
}

class User {
  name: string;
  constructor(name: string) { this.name = name; }
}

const intList = new TypedList<number>();
intList.add(4);

const stringList = new TypedList<string>();
stringList.add('hello');

const userList = new TypedList<User>();
userList.add(new User('Jamie'));
      
      `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Keyof Types 🤔</Heading>
        <CodePane language="javascript" theme="duotoneLight">
          {`

interface User {
  firstName: string;
  lastName: string;
}

const user: User = {
  firstName: "Type",
  lastName: "Script"
};
      
function getProperty(obj: User, key: string) {
  return obj[key];
}
      `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Keyof Types 💡</Heading>
        <CodePane language="javascript" theme="duotoneLight">
          {`
    interface User {
      firstName: string;
      lastName: string;
    }
    
    const user: User = {
      firstName: "Type",
      lastName: "Script"
    };
          
    function getProperty<Obj>(obj: Obj, key: keyof Obj): Obj[keyof Obj] {
      return obj[key];
    }
    `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Tuple Types 🤔</Heading>
        <CodePane language="javascript" theme="duotoneLight">{`
        type SuccessData = {
            success: true;
            response: {};
        };
        
        type ErrorData = {
            success: false;
            error: string
            description: string;
        }
        
        function splitSuccessAndErrorData(data: SuccessData[] | ErrorData[]) {
            const successData = [];
            const errorData = [];
            data.forEach((d) => {
                if (d.success) {
                    successData.push(d);
                } else {
                    errorData.push(d);
                }
            });
            return [successData, errorData];
        }
        `}</CodePane>
      </Slide>

      <Slide>
        <Heading>Tuple Types 💡</Heading>
        <CodePane language="javascript" theme="duotoneLight">{`
      type SuccessData = {
          success: true;
          response: {};
      };
      
      type ErrorData = {
          success: false;
          error: string
          description: string;
      }
      
      function splitSuccessAndErrorData(data: SuccessData[] | ErrorData[]): [SuccessData[], ErrorData[]] {
          const successData: SuccessData[] = [];
          const errorData: ErrorData[] = [];
          data.forEach((d) => {
              if (d.success) {
                  successData.push(d);
              } else {
                  errorData.push(d);
              }
          });
          return [successData, errorData];
      }
        `}</CodePane>
      </Slide>
      <Slide>
        <Heading>Type Predicates / User Defined Type Guards 🤔</Heading>
        <CodePane language="javascript" theme="duotoneLight">{`
    interface Cat {
      numberOfLives: number;
    }
    interface Dog {
      isAGoodBoy: boolean;
    }
      
    let animal: Cat | Dog;
    
    function logger(animal: Cat | Dog) {
        console.log(animal)
    }
      `}</CodePane>
      </Slide>

      <Slide>
        <Heading>Type Predicates / User Defined Type Guards 💡</Heading>
        <CodePane language="javascript" theme="duotoneLight">{`
    interface Cat {
      kind: 'cat';
      numberOfLives: number;
    }
    interface Dog {
      kind: 'dog';
      isAGoodBoy: boolean;
    }
      
    let animal: Cat | Dog;
    
    function isCat(animal: Cat | Dog): animal is Cat {
      return animal.kind === 'cat';
    }
    
    function logger(animal: Cat | Dog) {
      if (isCat(animal)) {
        console.log(animal)
      }
    }
      `}</CodePane>
      </Slide>
      <Slide>
        <Heading>Utility / Mapped types 🤔</Heading>
        <CodePane language="javascript" theme="duotoneLight">{`
    interface Todo {
      title: string;
      description: string;
    }
    
    function updateTodo(todo: Todo, fieldsToUpdate: Todo) {
      return { ...todo, ...fieldsToUpdate };
    }
    const todo1 = { title: 'Update tsconfig', description: 'enable strictNullChecks' };
    
    updateTodo(todo1, { description: 'enable noImplicitAny' });
      `}</CodePane>
      </Slide>
      <Slide>
        <Heading>Utility / Mapped types 💡</Heading>
        <CodePane language="javascript" theme="duotoneLight">{`
    interface Todo {
      title: string;
      description: string;
    }
    
    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
      return { ...todo, ...fieldsToUpdate };
    }
    
    const todo1 = { title: 'Update tsconfig', description: 'enable strictNullChecks' };
    
    updateTodo(todo1, { description: 'enable noImplicitAny' });
      `}</CodePane>
        <Heading fontSize="h6">
          In addition to Partial, there's many more Utility types
        </Heading>
      </Slide>
      <Slide>
        <Heading>Inferred Types</Heading>
        <CodePane language="javascript" theme="duotoneLight">
          {`
type VerticalAlignment = "top" | "middle" | "bottom";
type HorizontalAlignment = "left" | "center" | "right";

// Takes
//   | "top-left"    | "top-center"    | "top-right"
//   | "middle-left" | "middle-center" | "middle-right"
//   | "bottom-left" | "bottom-center" | "bottom-right"

function setAlignment(value: '$VerticalAlignment-$HorizontalAlignment'): void { }

setAlignment("top-left");   // works!
setAlignment("top-middel"); // error!
      `}
        </CodePane>
      </Slide>
      <Slide>
        <Heading>Thank you 🙏🏻</Heading>
      </Slide> */}
    </Deck>
  );
}

export default App;
