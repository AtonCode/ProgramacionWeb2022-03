package co.edu.javeriana.distribuidos;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.TestComponent;

import co.edu.javeriana.distribuidos.entity.Producto;
import co.edu.javeriana.distribuidos.repository.ProductoRepository;
import co.edu.javeriana.distribuidos.security.entity.Rol;
import co.edu.javeriana.distribuidos.security.entity.Usuario;
import co.edu.javeriana.distribuidos.security.enums.RolNombre;
import co.edu.javeriana.distribuidos.security.repository.UsuarioRepository;
import co.edu.javeriana.distribuidos.service.ProductoService;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class DistribuidosApplicationTests {
	@Autowired
	ProductoRepository productoRepository;
	@Autowired
	UsuarioRepository usuarioRepository;


	@BeforeEach
	void init() {
		productoRepository.deleteAll();
		productoRepository.save(new Producto("Chile Habanero",10));
		productoRepository.save(new Producto("Chile Serrano",20));
		productoRepository.save(new Producto("Chile de Arbol",30));
		productoRepository.save(new Producto("Chile Morita",40));

		Usuario juan = new Usuario("Juan", "juan", "juan@juan.me", "pwd");
		usuarioRepository.save(juan);

	}

	@Test
	void testFindAll() {
		Iterable<Producto> productos = productoRepository.findAll();
		assertNotNull(productos);
	}

	@Test
	void FindByNameProducto() {

		assertEquals(true, productoRepository.existsByNombre("Chile Habanero"));
		assertEquals(true, productoRepository.existsByNombre("Chile Serrano"));
		assertEquals(true, productoRepository.existsByNombre("Chile de Arbol"));
		assertEquals(true, productoRepository.existsByNombre("Chile Morita"));
	}

	@Test
	void editProducto() {
		Producto producto = productoRepository.findByNombre("Chile Habanero").get();
		producto.setCantidad(100);
		productoRepository.save(producto);
		assertEquals(100, productoRepository.findByNombre("Chile Habanero").get().getCantidad());
	}


	@Test
	void FindByNameProductoFalse() {
		productoRepository.deleteAll();
		assertEquals(false, productoRepository.existsByNombre("Chile Morita"));
	}

	//Usuario test

	@Test
	void testMakeUsuario() {
		assertEquals(true, usuarioRepository.existsByNombreUsuario("juan"));
	}

	@Test
	void testEditUsuario() {
		Usuario usuario = usuarioRepository.findByNombreUsuario("juan").get();
		usuario.setNombre("Juanito");
		usuarioRepository.save(usuario);
		assertEquals("Juanito", usuarioRepository.findByNombreUsuario("juan").get().getNombre());
	}

	@Test
	void testDeleteUsuario() {
		Usuario juan = usuarioRepository.findByNombreUsuario("juan").get();
		usuarioRepository.delete(juan);
		assertEquals(false, usuarioRepository.existsByNombreUsuario("juan"));
	}

	@Test
	void testMakeAdmin() {
		assertEquals(false, usuarioRepository.existsByNombreUsuario("admin"));
	}
}
