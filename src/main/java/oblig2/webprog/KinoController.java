package oblig2.webprog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
@RestController
@RequestMapping("/api/lagringserver/")
public class KinoController {


    @Autowired
    AppRepository sal;


    @PostMapping("/kino")
    public void lagre(Billet enBillet) {
        sal.leggInn(enBillet);
    }
    @GetMapping("/kino")
    public ArrayList<Billet> hent() {
        return sal.hentAlle();
    }

    @DeleteMapping("/kino")
    public void slett() {
        sal.slettAlle();
    }



}