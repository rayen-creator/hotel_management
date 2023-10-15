package tn.esprit.ms_saff_management.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import tn.esprit.ms_saff_management.entities.enums.Role;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idStaff;

    private String firstName;
    private String lastName;
    private String email;
    private String address;
    private int phone;
    private Date hireDate;

    @Enumerated(EnumType.STRING)
    private Role role;
    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL,mappedBy="staff")
    private List<Tasks> tasksList;

    public Staff(int iDstaff) {
    }

    @Override
    public String toString() {
        return "Staff{" +
                "idStaff=" + idStaff +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", phone=" + phone +
                ", hireDate=" + hireDate +
                ", role=" + role +
                '}';
    }
}
