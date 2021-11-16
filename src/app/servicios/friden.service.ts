import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Friden } from "../modelo/friden.model";
import { map } from "rxjs/operators";

@Injectable()
export class FridenService {
    fridensCollection: AngularFirestoreCollection<Friden>;
    fridenDoc: AngularFirestoreDocument<Friden>;
    fridens: Observable<Friden[]>;
    friden: Observable<Friden>;
    
    constructor(private db: AngularFirestore) {
        this.fridensCollection = this.db.collection<Friden>('fridens', ref => ref.orderBy('nombre', 'asc'));
    }
    
    getFridens(): Observable<Friden[]> {
        // Obtener la colección de fridens
        this.fridens = this.fridensCollection.snapshotChanges().pipe(map(cambios => {
            return cambios.map(accion => {
                const data = accion.payload.doc.data() as Friden;
                data.id = accion.payload.doc.id;
                return data;
            })
        })
        );
        return this.fridens;
    }
    
    agregarFriden(value: Friden) {
        this.fridensCollection.add(value);
    }
    
    modificarFriden(friden: Friden) {
      this.fridenDoc = this.db.doc(`fridens/${friden.id}`);
      this.fridenDoc.update(friden);
    }
    
    eliminarFriden(friden: Friden) {
        this.fridenDoc = this.db.doc(`fridens/${friden.id}`);
        this.fridenDoc.delete();
    }

    getFriden(id: string) {
        this.fridenDoc = this.db.doc<Friden>(`fridens/${id}`);
        this.friden = this.fridenDoc.snapshotChanges().pipe(map(accion => {
            if (accion.payload.exists === false) {
                return null;
            } else {
                const data = accion.payload.data() as Friden;
                data.id = accion.payload.id;
                return data;
            }
        })
    );
        return this.friden;
    }
}