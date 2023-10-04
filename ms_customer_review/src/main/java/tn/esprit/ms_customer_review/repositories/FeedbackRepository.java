package tn.esprit.ms_customer_review.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.ms_customer_review.entities.Feedback;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,Integer> {
}
