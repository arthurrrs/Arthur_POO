public abstract class NobleHouse {

    protected String name;
    protected String seat;

    public NobleHouse(String name, String seat) {
        this.name = name;
        this.seat = seat;
    }

    public String getName() {
        return name;
    }

    public String getSeat() {
        return seat;
    }
}

public class CasaStark extends NobleHouse implements HouseRules {

    private String ancestralWeapon;

    public CasaStark(String seat, String ancestralWeapon) {
        super("Casa Stark", seat);
        this.ancestralWeapon = ancestralWeapon;
    }

    
    public void displayMotto() {
        System.out.println("Winter is coming.");
    }

    
    public void displaySigil() {
        System.out.println("Direwolf");
    }

    
    public void displayLands() {
        System.out.println("The North");
    }
}

public class CasaLannister extends NobleHouse implements HouseRules {

    private int wealth;

    public CasaLannister(String seat, int wealth) {
        super("Casa Lannister", seat);
        this.wealth = wealth;
    }

    public void displayMotto() {
        System.out.println("Hear Me Roar! (or) A Lannister Always Pays His Debts");
    }

    public void displaySigil() {
        System.out.println("Lion");
    }

    public void displayLands() {
        System.out.println("The Westerlands");
    }
}
