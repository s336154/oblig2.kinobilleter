package oblig2.webprog;



import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController

public class KinoController {


    private final List<Billet> billeter= new ArrayList<>();

    @PostMapping("/lagre")
    public void lagreBillet(Billet enBillet){
        billeter.add(enBillet);
    }
    @GetMapping("/hentAlle")
    public List<Billet> hentAlle(){
        return billeter;
    }

    @GetMapping("/slettAlle")
    public void slettAlle(){
        billeter.clear();
    }





}