import { sdkAdmin } from "./firebase";
import { Models } from "../types/models";
import { GetDocumentParams } from "../types/firestore";

export class FirestoreService {
  private readonly db = sdkAdmin.firestore();

  async getCollection<Collection extends keyof Models>(
    collection: Collection
  ): Promise<Array<Models[Collection]>> {
    try {
      const snapshot = await this.db.collection(collection).get();
      return snapshot.docs.map((doc) => {
        const data = doc.data() as Models[Collection];
        return { ...data, documentId: doc.id };
      });
    } catch (error: any) {
      throw new Error("Error al obtener la colección: " + error.message);
    }
  }

  async getSubCollection<
    Collection extends keyof Models,
    SubCollection extends keyof Models
  >(
    collection: Collection,
    docId: string,
    subCollection: SubCollection
  ): Promise<Models[SubCollection][]> {
    try {
      const docsSnap = await this.db
        .collection(collection)
        .doc(docId)
        .collection(subCollection)
        .get();

      if (docsSnap.empty) {
        throw "Collection not exist";
      }

      return docsSnap.docs.map((doc) => {
        const data = doc.data() as Models[SubCollection];
        return { documentId: doc.id, ...data };
      });
    } catch (error: any) {
      throw new Error("Error al obtener la subcoleccion: " + error);
    }
  }

  getCollectionRef<Collection extends keyof Models>(collection: Collection) {
    return this.db.collection(collection);
  }

  async setDocument<Collection extends keyof Models>(
    collection: Collection,
    docId: string,
    data: Models[Collection]
  ): Promise<void> {
    try {
      await this.db.collection(collection).doc(docId).set(data);
    } catch (error: any) {
      throw new Error("Error al guardar el documento: " + error);
    }
  }

  async setSubDocument<
    Collection extends keyof Models,
    SubCollection extends keyof Models
  >(
    collection: Collection,
    docId: string,
    subCollection: SubCollection,
    subDocId: string,
    data: Models[SubCollection]
  ): Promise<void> {
    try {
      const docRef = this.db
        .collection(collection)
        .doc(docId)
        .collection(subCollection)
        .doc(subDocId);
      await docRef.set(data);
    } catch (error: any) {
      throw new Error(
        "Error al settear el documento en la subcolección: " + error
      );
    }
  }

  async updateDocument<Collection extends keyof Models>(
    collection: Collection,
    docId: string,
    data: Partial<Models[Collection]>
  ) {
    await this.db.collection(collection).doc(docId).update(data);
  }

  async updateSubDocument<
    Collection extends keyof Models,
    SubCollection extends keyof Models
  >(
    collection: Collection,
    docId: string,
    subCollection: SubCollection,
    subDocId: string,
    data: Partial<Models[SubCollection]>
  ) {
    await this.db
      .collection(collection)
      .doc(docId)
      .collection(subCollection)
      .doc(subDocId)
      .update(data);
  }

  async getDocument<Collection extends keyof Models>(
    params: GetDocumentParams<Collection>
  ): Promise<Models[Collection]> {
    try {
      const { collection, docId } = params;
      const doc = await this.db.collection(collection).doc(docId).get();
      if (!doc.exists) {
        throw "Document not exist";
      }
      return doc.data() as Models[Collection];
    } catch (error: any) {
      throw new Error("Error al obtener el documento: " + error);
    }
  }

  async deleteSubDocument<
    Collection extends keyof Models,
    SubCollection extends keyof Models
  >(
    collection: Collection,
    docId: string,
    subCollection: SubCollection,
    subDocId: string
  ) {
    await this.db
      .collection(collection)
      .doc(docId)
      .collection(subCollection)
      .doc(subDocId)
      .delete();
  }

  async getSubDocument<
    Collection extends keyof Models,
    SubCollection extends keyof Models
  >(
    collection: Collection,
    docId: string,
    subCollection: SubCollection,
    subDocId: string
  ): Promise<Models[SubCollection]> {
    try {
      const docSnap = await this.db
        .collection(collection)
        .doc(docId)
        .collection(subCollection)
        .doc(subDocId)
        .get();

      if (!docSnap.exists) {
        throw "Document not exist";
      }

      return docSnap.data() as Models[SubCollection];
    } catch (error: any) {
      throw new Error("Error al obtener el sub documento: " + error);
    }
  }
}
