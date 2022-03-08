const SecurityContext = React.createContext({ username: "", permissions: [] });

const ControlsComponent = (props) => {
  return (
    <SecurityContext.Provider value={{ username: props.username }}>
      <LogoutWrapper></LogoutWrapper>
    </SecurityContext.Provider>
  );
};

const LogoutWrapper = (props) => {
  var context = React.useContext(SecurityContext);
  
  return (
    <div>
      <p>{context.username}</p>
      <button>Click here to logout</button>
    </div>
  );
};

### Select all the correct statements if ControlsComponent is rendered with the username prop equal to "James".


# TRUE
context.username in the LogoutWrapper will have "James" as its value.

# FALSE 
context.permissions in the LogoutWrapper will have [ ] as its value.

# TRUE
If none of the components have a SecurityContext.Provider, the value of context.username in the LogoutWrapper will be "".

# FALSE 
If a component that renders ControlsComponent provides another SecurityContext.Provider, the LogoutWrapper will use it instead of the one     provided by ControlsComponent.

# TRUE
A single component can declare multiple instances of SecurityContext.Provider.