import java.util.ArrayList;
import java.util.List;

public abstract class NobleHouse {

    protected String name;
    protected String seat;
    protected List<Heir> heirs;

    public NobleHouse(String name, String seat) {
        this.name = name;
        this.seat = seat;
        this.heirs = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public String getSeat() {
        return seat;
    }

    public void addHeir(Heir heir) {
        heirs.add(heir);
    }

    public static class Heir {
        private String name;
        private int age;

        public Heir(String name, int age) {
            this.name = name;
            this.age = age;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }
    }
}
