
const MenuSection = () => {
    return (
        <section className="container mx-auto px-4 py-8 flex flex-col">
            <div className="text-center mb-12">
                <p className="uppercase tracking-widest">
                    Flavors for Royalty
                </p>
                <div className="decorative-line mx-auto"></div>
                <h1 className="text-4xl mt-4 text-green-800">
                    We Offer Top Notch
                </h1>
                <p className="mt-4 max-w-2xl mx-auto">
                    Welcome to our restaurant, where we take great pride in offering a dining experience that is truly top-notch. Our menu is a fusion of flavors, carefully crafted to tantalize your taste buds and leave you with a memorable culinary journey.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="menu-item1">
                    <div className="shine"></div>
                    <img 
                        alt="A combo pack with a burger, fries, and a drink" 
                        height="300" 
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-BVbpSZmLndA7MfHIxv2ahIKS/user-IBY8IaMXtVn7IVIdZeyvjx16/img-pzSCe5oiSxjFgluBvF80PIXo.png?st=2024-09-11T10%3A21%3A13Z&se=2024-09-11T12%3A21%3A13Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-10T22%3A56%3A57Z&ske=2024-09-11T22%3A56%3A57Z&sks=b&skv=2024-08-04&sig=X5l39gdkhs6P60l2MULLDhTd9NfCOvN18KnTaSt72U0%3D" 
                        width="300"
                    />
                    <h3>Combo-Pack</h3>
                    <a href="#">View Menu</a>
                </div>
                <div className="menu-item1">
                    <div className="shine"></div>
                    <img 
                        alt="A pizza with various toppings" 
                        height="300" 
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-BVbpSZmLndA7MfHIxv2ahIKS/user-IBY8IaMXtVn7IVIdZeyvjx16/img-jCPro4XgbzGjGjqKV0xpp8l8.png?st=2024-09-11T10%3A21%3A18Z&se=2024-09-11T12%3A21%3A18Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-10T22%3A35%3A29Z&ske=2024-09-11T22%3A35%3A29Z&sks=b&skv=2024-08-04&sig=48ePkjHdNsOnEA/V4qqO8HnQZhUPwOZVSlWnwVtoCeI%3D" 
                        width="300"
                    />
                    <h3>Pizza</h3>
                    <a href="#">View Menu</a>
                </div>
                <div className="menu-item1">
                    <div className="shine"></div>
                    <img 
                        alt="A mocktail drink with a strawberry garnish" 
                        height="300" 
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-BVbpSZmLndA7MfHIxv2ahIKS/user-IBY8IaMXtVn7IVIdZeyvjx16/img-Wym0K1xAWQpg1fg3utlXk4i4.png?st=2024-09-11T10%3A21%3A18Z&se=2024-09-11T12%3A21%3A18Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2024-09-10T23%3A09%3A07Z&ske=2024-09-11T23%3A09%3A07Z&sks=b&skv=2024-08-04&sig=yfCWP7gmrX4ZfP/qd2CbfwI6Wu7jJuJ/ZU0qCF9v1dk%3D" 
                        width="300"
                    />
                    <h3>Mocktails</h3>
                    <a href="#">View Menu</a>
                </div>
            </div>
            
        </section>
    );
};

export default MenuSection;