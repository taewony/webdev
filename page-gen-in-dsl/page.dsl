// Product grid for online fashion store
component ProductGrid {
  
  container: flexbox(wrap: true, gap: 16px) {
    
    ProductCard foreach $products {
      image: $product.hero_image
      title: $product.name
      price: $product.current_price
      rating: stars($product.avg_rating)
      
      styling: "Large product images - customers buy with their eyes first"
      
      hover_effects: {
        transform: scale(1.02)
        transition: "Smooth but quick - customers browse rapidly"
      }
      
      WishlistButton {
        position: top-right
        style: "Subtle heart icon - don't compete with image, name, price"
      }
    }
  }
  
  filters: SidebarFilters {
    categories: $available_categories
    price_range: slider($min_price, $max_price)
    colors: color_swatches($available_colors)
    
    layout: "Collapse on mobile but keep key filters visible"
  }
  
  pagination: "Infinite scroll - maintain shopping momentum"
}