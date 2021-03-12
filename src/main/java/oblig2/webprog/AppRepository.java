package oblig2.webprog;


import org.springframework.stereotype.Repository;

import java.util.ArrayList;


@Repository

public class AppRepository<Billet> {


        private final ArrayList<Billet> billeter = new ArrayList<>();

        public void leggInn(Billet enBillet) {
            billeter.add(enBillet);
        }

        public ArrayList<Billet> hentAlle() {
            return billeter;
        }


        public void slettAlle() {
            billeter.clear();
        } }

