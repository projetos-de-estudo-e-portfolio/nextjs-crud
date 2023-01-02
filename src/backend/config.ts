import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite'

// if (!firebase.getApps.length) {
//   firebase.initializeApp({
//   })
// }

// export default firebase

const firebaseConfig= {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMIAN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
}

const defaultProject = initializeApp(firebaseConfig)
let defaultFirestore = getFirestore(defaultProject);
defaultFirestore = getFirestore();

const db = getFirestore(defaultProject);

async function getClientes(db: any) {
  const clientesCol = collection(db, 'clientes')
  const clienteSnapshot = await getDocs(clientesCol)
  const clientesLista = clienteSnapshot.docs.map(doc => doc.data)
}


export default firebaseConfig