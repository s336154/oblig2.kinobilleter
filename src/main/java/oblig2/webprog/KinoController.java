package oblig2.webprog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;

@RestController

public class KinoController {


    private final List<Billet> billeter= new ArrayList<>();

    @PostMapping("/kino")
    public void lagreBillet(Billet enBillet){
        billeter.add(enBillet);
    }
    @GetMapping("/kino")
    public List<Billet> hentAlle(){
        return billeter;
    }

    @GetMapping("/kino")
    public void slettAlle(){
        billeter.clear();
    }



}