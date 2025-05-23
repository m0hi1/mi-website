import React, { ReactNode, useState, createContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import QuoteRequestForm from "./QuoteRequestForm";

interface LayoutProps {
  children: ReactNode;
}

export const QuoteDialogContext = createContext<{
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  productName?: string;
  setProductName: (name?: string) => void;
}>({
  isOpen: false,
  setOpen: () => {},
  productName: undefined,
  setProductName: () => {},
});

const Layout = ({ children }: LayoutProps) => {
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false);
  const [quoteProductName, setQuoteProductName] = useState<string | undefined>(
    undefined
  );

  return (
    <QuoteDialogContext.Provider
      value={{
        isOpen: isQuoteDialogOpen,
        setOpen: setIsQuoteDialogOpen,
        productName: quoteProductName,
        setProductName: setQuoteProductName,
      }}
    >
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AlertDialog
          open={isQuoteDialogOpen}
          onOpenChange={setIsQuoteDialogOpen}
        >
          <AlertDialogContent className="sm:max-w-[600px]">
            <AlertDialogHeader>
              <AlertDialogTitle>Request a Quote</AlertDialogTitle>
            </AlertDialogHeader>
            <QuoteRequestForm
              productName={quoteProductName}
              onClose={() => setIsQuoteDialogOpen(false)}
            />
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </QuoteDialogContext.Provider>
  );
};

export default Layout;
