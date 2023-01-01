import Cliente from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";
import { Firestore, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";



export default class ColecaoCliente implements ClienteRepositorio {


  #conversor = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.nome,
        idade: cliente.idade,
      }
    },
    fromFirestore( 
      snapshot: QueryDocumentSnapshot,
      options: SnapshotOptions
      ) { 
        const dados = snapshot.data(options)
        return new Cliente(dados.nome, dados.idade, snapshot.id)
      }
  }

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