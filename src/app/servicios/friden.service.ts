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

}