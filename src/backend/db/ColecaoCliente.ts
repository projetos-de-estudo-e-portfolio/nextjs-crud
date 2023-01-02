import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import { QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import firebaseConfig from "../config";
import { getFirestore } from "firebase/firestore";



export default class ColecaoCliente implements ClienteRepositorio {


  async excluir(cliente: Cliente): Promise<void> {
    return null
  }
  async obterTodos(): Promise<Cliente[]> {
    return null
  }
  async salvar(cliente: Cliente): Promise<Cliente> {
    return null
  }

}

const db = getFirestore()

const clienteConverter = {
  toFirestore(cliente: Cliente){
    return { nome: cliente.nome, idade: cliente.idade }
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Cliente {
    const data = snapshot.data(options)!;
    return new Cliente(data.nome, data.idade, snapshot.id)
  }
}

const clienteSnap = firebase
    .firestore()
    .collection('clientes')
    .withConverter(clienteConverter)
    .doc().get()


// class Post {
//   constructor(readonly title: string, readonly author: string) { }

//   toString(): string {
//     return this.title + ', by ' + this.author;
//   }
// }

// const postConverter = {
//   toFirestore(post: WithFieldValue<Post>): DocumentData {
//     return { title: post.title, author: post.author };
//   },
//   fromFirestore(
//     snapshot: QueryDocumentSnapshot,
//     options: SnapshotOptions
//   ): Post {
//     const data = snapshot.data(options)!;
//     return new Post(data.title, data.author);
//   }
// };

// const postSnap = await firebase.firestore()
//   .collection('posts')
//   .withConverter(postConverter)
//   .doc().get();
// const post = postSnap.data();
// if (post !== undefined) {
//   post.title; // string
//   post.toString(); // Should be defined
//   post.someNonExistentProperty; // TS error
// }
