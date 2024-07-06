package za.codek.it.dataapi.repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
import za.codek.it.dataapi.domain.Authority;

/**
 * Spring Data JPA repository for the Authority entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
