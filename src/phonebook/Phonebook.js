// import React, { Component } from "react";
// import styles from "./Phonebook.module.css";

// class Phonebook extends Component {
//   reader = () => {
//     const contact = {
//       name: [this.state.name],
//     };
//     this.setState((prev) => {
//       return {
//         contacts: [...prev.contacts, contact],
//       }
//   })
//   };

//   inputValue = (e) => {
//     this.setState({ name: e.target.value });
//     // console.log(e.target.value);
//   };

//   render() {
//     return (
//       <form onSubmit={this.reader}>
//         <h2>Name</h2>
//         <input onChange={this.inputValue}></input>
//         <button type="submit" className={styles.btn}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default Phonebook;
