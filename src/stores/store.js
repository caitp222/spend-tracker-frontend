// import React, { Component } from 'react'
// const StoreContext = React.createContext()
//
// const createStore = WrappedComponent => {
//
//   return class extends Component {
//     state = {
//       get: key => {
//         return this.state[key]
//       },
//       set: (key, value) => {
//         const state = this.state
//         state[key] = value
//         this.setState(state)
//       },
//       remove: key => {
//         const state = this.state
//         delete state[key]
//         this.setState(state)
//       },
//       showModal: false,
//       modalComponent: null,
//       openModal: (component) => {
//         const state = this.state;
//         state.showModal = true;
//         state.modalComponent = component;
//         this.setState(state);
//       }
//     }
//
//
//     render() {
//       return (
//         <StoreContext.Provider value={this.state}>
//           <WrappedComponent {...this.props} />
//         </StoreContext.Provider>
//       )
//     }
//   }
// }
//
// const withStore = WrappedComponent => {
//   return class extends Component {
//     render() {
//       return (
//         <StoreContext.Consumer>
//           {context => <WrappedComponent store={context} {...this.props} />}
//         </StoreContext.Consumer>
//       )
//     }
//   }
// }
// export { createStore, withStore };
