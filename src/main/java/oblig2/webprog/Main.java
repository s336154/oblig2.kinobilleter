package oblig2.webprog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;

@SpringBootApplication
public class Main {

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

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

