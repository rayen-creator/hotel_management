package tn.esprit.ms_customer_review;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class MsCustomerReviewApplication {

    public static void main(String[] args) {
        SpringApplication.run(MsCustomerReviewApplication.class, args);
    }

}
